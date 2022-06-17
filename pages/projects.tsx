import Drawer from './components/Drawer'
import Table from './components/Table'
import Button from './components/Button'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import TextField from './components/TextField'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import Progress from './components/Progress'
import Thumbnail from './components/Thumbnail'
import ReadOnlyText from './components/ReadOnlyText'

const tableHeader = [
  { id: 'status', label: 'Status', minWidth: 100, align: 'center', show: true },
  { id: 'incharge', label: 'In charge', minWidth: 100, align: 'center', show: true },
  { id: 'title', label: 'Video', minWidth: 170, align: 'center', show: true },
  { id: 'price', label: 'Price/Min', minWidth: 170, align: 'center', show: true, }, 
  { id: 'language', label: 'Language', align: 'center', show: true, },
  { id: 'thumbnail', label: 'Thumbnail', show: false, },
  { id: 'url', label: 'Url', show: false, },
  { id: 'duration', label: 'Duration', show: false, },
]

interface Project {
  duration: number;
  incharge: string;
  language: string;
  price: number;
  status: number;
  thumbnail: string;
  title: string;
  url: string;
}

export default function Projects(initialData: { projects: Project[] }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchResults, setSearchResults] = useState<Project[]>([]);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);

  useEffect(() => {
    setProjects(initialData.projects);
  }, [initialData.projects])

  const handleActionMenuItemOnClick = async (index: any) => {
    const res = await fetch("http://localhost:3000/api/projects", {
      method: 'PUT',
      body: JSON.stringify(index)
    });
    const projects: Project[] = await res.json();
    setProjects(projects);
  }

  const handleTextFieldOnChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const searchQuery = e.target.value;
    if (searchQuery !== null) {
      const searchResults = projects.filter(item => {
        return Object.values(item).join('').toLowerCase().includes(searchQuery.toLowerCase());
      })

      if (searchResults.length > 0) {
        setShowSearchResults(true);
        setSearchResults(searchResults);
      }
    } else {
      setShowSearchResults(false);
    }
  }

  return(
  	<div className="container">
    	<h1 className="title">Projects</h1>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <TextField
         ariaLabel={"search query"}
         placeholder={"Search Query"}
         onChange={ (e) => handleTextFieldOnChange(e) }
        />
        <Button
         routePath={"addProject"}
         startIcon={<AddCircleIcon />}
         text={"ADD PROJECT"}
        />
      </Box>
      <Table
        tableHeader= { tableHeader }
        tableData={ showSearchResults ? searchResults : projects }
        handleActionMenuItemOnClick={ (index: number) => handleActionMenuItemOnClick(index) }
        render={ (col: any, row: any) => { 
          const data: any = {};
          const rowData = row[col.id];
          data[col.id] = rowData;
          return <div>
            { data.hasOwnProperty('status') && <Progress status={data.status} /> }
            { data.hasOwnProperty('incharge') && <ReadOnlyText text={data.incharge} /> }
            { data.hasOwnProperty('title') && 
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Thumbnail src={row.thumbnail} alt={row.title} href={row.url} duration={row.duration} />
                <div style={{ marginLeft: '50px' }}>{row.title}</div>
              </Box>
               }
            { data.hasOwnProperty('price') && <ReadOnlyText style={{ color: "green" }} text={data.price} format={"ko-KR"} /> }
            { data.hasOwnProperty('language') && <ReadOnlyText text={data.language} /> }
          </div>
        }}    
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/projects");
  const projects: Project[] = await res.json();
  return {props: { projects }}
}

Projects.getLayout = function getLayout(page: any) {
  return (
    <Drawer>
      {page}
    </Drawer>
  )
}