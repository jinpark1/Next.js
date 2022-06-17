import type { NextApiRequest, NextApiResponse } from "next";

const projects = [
  {
    thumbnail: "https://i.ytimg.com/vi/Mm24_uELzro/maxresdefault.jpg",
    title: "My Items (원더걸스 / 안소희)",
    url: "https://www.youtube.com/watch?v=Mm24_uELzro",
    duration: 873,
    status: 0,
    incharge: "문미경",
    price: 1500,
    language: "KREN",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/Zx0hz6GXwvQ/maxresdefault.jpg",
    title: "초아 Q&A",
    url: "https://www.youtube.com/watch?v=Zx0hz6GXwvQ",
    duration: 407,
    status: 1,
    incharge: "고재원",
    price: 2000,
    language: "KREN",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/SXr8Rb97nIk/maxresdefault.jpg",
    title: "Squid Game 오징어게임",
    url: "https://www.youtube.com/watch?v=SXr8Rb97nIk",
    duration: 71,
    status: 1,
    incharge: "배민규",
    price: 2500,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg",
    title: "BTS 다이너마이트",
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    duration: 223,
    status: 3,
    incharge: "강유리",
    price: 3000,
    language: "KREN",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ahPdfGBLGBo/maxresdefault.jpg",
    title: "Tottenham Son play",
    url: "https://www.youtube.com/watch?v=ahPdfGBLGBo",
    duration: 404,
    status: 1,
    incharge: "조창희",
    price: 2000,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/SXr8Rb97nIk/maxresdefault.jpg",
    title: "Squid Game 오징어게임",
    url: "https://www.youtube.com/watch?v=SXr8Rb97nIk",
    duration: 71,
    status: 1,
    incharge: "배민규",
    price: 2500,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg",
    title: "BTS 다이너마이트",
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    duration: 223,
    status: 3,
    incharge: "강유리",
    price: 3000,
    language: "KREN",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ahPdfGBLGBo/maxresdefault.jpg",
    title: "Tottenham Son play",
    url: "https://www.youtube.com/watch?v=ahPdfGBLGBo",
    duration: 404,
    status: 1,
    incharge: "조창희",
    price: 2000,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ahPdfGBLGBo/maxresdefault.jpg",
    title: "Tottenham Son play",
    url: "https://www.youtube.com/watch?v=ahPdfGBLGBo",
    duration: 404,
    status: 1,
    incharge: "조창희",
    price: 2000,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/SXr8Rb97nIk/maxresdefault.jpg",
    title: "Squid Game 오징어게임",
    url: "https://www.youtube.com/watch?v=SXr8Rb97nIk",
    duration: 71,
    status: 1,
    incharge: "배민규",
    price: 2500,
    language: "ENKR",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/gdZLi9oWNZg/maxresdefault.jpg",
    title: "BTS 다이너마이트",
    url: "https://www.youtube.com/watch?v=gdZLi9oWNZg",
    duration: 223,
    status: 3,
    incharge: "강유리",
    price: 3000,
    language: "KREN",
  },
  {
    thumbnail: "https://i.ytimg.com/vi/ahPdfGBLGBo/maxresdefault.jpg",
    title: "Tottenham Son play",
    url: "https://www.youtube.com/watch?v=ahPdfGBLGBo",
    duration: 404,
    status: 1,
    incharge: "조창희",
    price: 2000,
    language: "ENKR",
  }
];

type Data = {
  thumbnail: string;
  title: string;
  url: string;
  duration: number;
  status: number;
  incharge: string;
  price: number;
  language: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PUT') {
    projects.splice(req.body, 1);
    res.status(200).json(projects);
  } else {
    res.status(200).json(projects);
  }
}
