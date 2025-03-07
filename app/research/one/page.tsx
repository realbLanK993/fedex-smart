import CommonPage from "@/components/common/common-page";
import { CommonPageProps } from "@/lib/types";


const researchArr: CommonPageProps = {
  title: "Title One For Research",
  date: "5 December 2025",
  type: "Research",
  header_img_link:
    "https://images.pexels.com/photos/716565/pexels-photo-716565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia! Modi, libero repudiandae? Neque corporis adipisci doloremque voluptatibus sapiente quod tempore ea vero molestiae delectus. Delectus laborum esse sequi, praesentium necessitatibus repudiandae a minus deleniti hic architecto impedit fuga odio, iste dicta, quibusdam sint! Alias adipisci et nisi omnis voluptas?",
  links: {
    common: "https://www.google.com",
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
  },
  faculty: [
    {
      name: "John Doe",
      designation: "Professor",
      location: {
        department: "Computer Science",
        institution: "IIT Madras",
      },
    },
    {
      name: "John Doe",
      designation: "Professor",
      location: {
        department: "Computer Science",
        institution: "IIT Madras",
      },
    },
    {
      name: "John Doe",
      designation: "Professor",
      location: {
        department: "Computer Science",
        institution: "IIT Madras",
      },
    },
  ],
}; 

export default function ResearchPage(){
    return <CommonPage {...researchArr} />
    
}