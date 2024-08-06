
import React from "react";
import Footer from './Footer'
import netflix from '../assets/netflix.png'
import phoneStore from '../assets/phoneStore.png'
import socialmedia from '../assets/socialmedia.png'
import akweb from '../assets/akweb.png'


const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href="/">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
};



export const project = [
    {
        title:'Social Media App',
        description:'Co People is a dynamic social media platform I developed using React JS, Node JS, MySQL, and WebSocket. This engaging web application enables users to connect, share content, and chat in real-time for a seamless social experience.',
        image: socialmedia, 
        git:'https://github.com/anoopksanoop/SocialMedia',
        technologies:['MYSQL' ,'ReactJS' , 'NodeJS', 'Websocket']
    },
    {
        title:'VStore',
        description:'Co Shop is a dynamic phone store I crafted using React JS, featuring login/signup, data storage with localStorage, add-to-cart functionality, and state management with Redux and Flux architecture. This project provides a modern and intuitive shopping experience for users to browse and purchase phones seamlessly.',
        image: phoneStore, 
        git:"https://github.com/anoopksanoop/Vstore-online-phone-store-React",
        technologies:[ 'React JS', 'Redux', 'CSS']
    },
    {
        title:'Netflix-Clone',
        description:'Co Stream is a dynamic Netflix clone I crafted using React JS. This project leverages technologies such as React JS for the front end, displays trending movies, categorizes content by language, and updates automatically via API integration, offering a modern and immersive streaming experience.',
        image: netflix,  
        git:"https://github.com/anoopksanoop/REACT.JS-Netflix-Clone",
        technologies:[ 'React JS', 'CSS', 'API Integration']
    },
    {
        title:'Ak-web',
        description:'Dynamic web application I crafted using React JS, Redux, and Flux architecture. This project is a customizable celling website where users can select website types, choose from available designs, and make payments. Login and sign-in data are stored in MySQL, and administrators can manage users, upload posts, and update plan details.',
        image: akweb, 
        git:"https://github.com/anoopksanoop/Ak-web",
        technologies:[ 'MySQL','React JS', 'CSS', 'Redux', 'API Integration', 'Payment Integration']
    }
];


export default Projects