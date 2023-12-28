import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgProjects = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 661 122" {...props}>
    <g fill="#000">
      <path
        d="M104.188 38.375c0 4.417-.855 8.583-2.563 12.5-1.667 3.875-3.958 7.27-6.875 10.188-2.875 2.874-6.25 5.145-10.125 6.812s-8.02 2.5-12.438 2.5H20.75V57.75h51.438c2.666 0 5.166-.5 7.5-1.5 2.333-1.042 4.354-2.438 6.062-4.188a19.353 19.353 0 0 0 4.125-6.124c1-2.376 1.5-4.896 1.5-7.563s-.5-5.167-1.5-7.5-2.375-4.354-4.125-6.063c-1.708-1.75-3.73-3.125-6.063-4.125s-4.833-1.5-7.5-1.5H13.563V96H.75V6.375h71.438c4.416 0 8.562.854 12.437 2.563 3.875 1.666 7.25 3.958 10.125 6.874 2.917 2.876 5.208 6.25 6.875 10.126 1.708 3.875 2.563 8.02 2.563 12.437zM186.5 38.375h-48c-1.333 0-2.583.27-3.75.813a9.66 9.66 0 0 0-3.062 2.062c-.876.875-1.563 1.896-2.063 3.063s-.75 2.395-.75 3.687v48h-12.813V48c0-3.125.584-6.042 1.75-8.75 1.167-2.708 2.771-5.063 4.813-7.063 2.042-2.041 4.417-3.645 7.125-4.812s5.625-1.75 8.75-1.75h48zM281.062 60.813c0 4.833-.916 9.374-2.75 13.624-1.833 4.25-4.333 7.98-7.5 11.188-3.124 3.167-6.812 5.688-11.062 7.563-4.25 1.833-8.792 2.77-13.625 2.812h-19.687c-4.834-.042-9.376-.98-13.626-2.813-4.25-1.874-7.958-4.395-11.124-7.562-3.126-3.208-5.605-6.938-7.438-11.188s-2.75-8.791-2.75-13.624.917-9.376 2.75-13.626c1.833-4.291 4.312-8.02 7.438-11.187 3.166-3.208 6.874-5.73 11.124-7.563 4.25-1.875 8.792-2.812 13.626-2.812h19.687c3.208 0 6.313.417 9.313 1.25s5.791 2.02 8.374 3.563A34.91 34.91 0 0 1 270.875 36a33.612 33.612 0 0 1 5.437 7.125 35.528 35.528 0 0 1 3.5 8.375c.834 3 1.25 6.104 1.25 9.313zm-12.75 0c0-3.084-.583-5.98-1.75-8.688-1.166-2.708-2.75-5.063-4.75-7.063-2-2.041-4.354-3.645-7.062-4.812-2.667-1.208-5.542-1.833-8.625-1.875h-19.687c-3.084.042-5.98.667-8.688 1.875-2.667 1.167-5 2.77-7 4.813-2 2-3.583 4.354-4.75 7.062-1.125 2.708-1.688 5.604-1.688 8.688s.563 5.979 1.688 8.687c1.167 2.708 2.75 5.083 4.75 7.125 2 2 4.333 3.604 7 4.813 2.708 1.166 5.604 1.75 8.688 1.75h19.687c3.083 0 5.958-.584 8.625-1.75 2.708-1.209 5.062-2.813 7.062-4.813 2-2.042 3.584-4.417 4.75-7.125 1.167-2.708 1.75-5.604 1.75-8.688z"
        stroke={props.color || '#ffffff'}
        fill={props.fill || 'none'}
      />
      <path
        d="M307.875 99.188c0 3.124-.583 6.041-1.75 8.75a22.636 22.636 0 0 1-4.813 7.124c-2 2.042-4.354 3.646-7.062 4.813s-5.625 1.75-8.75 1.75h-59.062l19.687-8.95v-4.737l39.375.874c1.292 0 2.521-.25 3.688-.75 1.166-.5 2.187-1.187 3.062-2.062s1.562-1.896 2.062-3.062c.5-1.167.75-2.417.75-3.75V25.624h12.813zm3.187-89.563c0 1.333-.25 2.583-.75 3.75a9.887 9.887 0 0 1-2.062 3c-.833.875-1.833 1.563-3 2.063s-2.417.75-3.75.75-2.583-.25-3.75-.75-2.188-1.188-3.062-2.063a9.872 9.872 0 0 1-2.063-3 9.418 9.418 0 0 1-.75-3.75c0-1.292.25-2.52.75-3.688A9.646 9.646 0 0 1 297.75.813C298.917.271 300.167 0 301.5 0s2.583.27 3.75.813a8.96 8.96 0 0 1 3 2.062c.875.875 1.562 1.896 2.062 3.063s.75 2.395.75 3.687zM408.25 48c0 3.125-.583 6.042-1.75 8.75s-2.771 5.083-4.812 7.125c-2 2-4.376 3.583-7.126 4.75-2.708 1.167-5.604 1.75-8.687 1.75h-49.063c.917 1.875 2.063 3.604 3.438 5.188s2.917 2.937 4.625 4.062 3.563 2 5.563 2.625c2.041.625 4.166.938 6.374.938h41.876V96h-41.876c-4.833-.042-9.374-.98-13.624-2.813-4.25-1.874-7.959-4.395-11.126-7.562-3.124-3.208-5.604-6.938-7.437-11.188s-2.75-8.791-2.75-13.624.917-9.376 2.75-13.626 4.313-7.958 7.437-11.124c3.167-3.209 6.876-5.73 11.126-7.563 4.25-1.875 8.791-2.833 13.624-2.875h29.063c3.083 0 5.979.583 8.687 1.75 2.75 1.167 5.126 2.77 7.126 4.813 2.041 2 3.645 4.354 4.812 7.062s1.75 5.625 1.75 8.75zm-22.375 9.625c1.292 0 2.521-.25 3.687-.75 1.167-.5 2.188-1.188 3.063-2.063s1.563-1.895 2.063-3.062.75-2.417.75-3.75c0-1.292-.25-2.52-.75-3.688s-1.188-2.187-2.063-3.062-1.896-1.563-3.063-2.063a8.648 8.648 0 0 0-3.687-.812h-29.063c-2.833 0-5.5.5-8 1.5A22.698 22.698 0 0 0 342.188 44c-1.917 1.708-3.521 3.75-4.813 6.125a22.319 22.319 0 0 0-2.437 7.5zM493.188 96h-41.876c-4.833-.042-9.374-.98-13.624-2.813-4.25-1.874-7.959-4.395-11.126-7.562-3.124-3.208-5.604-6.938-7.437-11.188s-2.75-8.791-2.75-13.624.917-9.376 2.75-13.626c1.833-4.291 4.313-8.02 7.437-11.187 3.167-3.208 6.876-5.73 11.126-7.563 4.25-1.875 8.791-2.812 13.624-2.812h41.876v12.75h-41.876c-3.083.042-5.979.667-8.687 1.875-2.667 1.167-5 2.77-7 4.813-2 2-3.583 4.354-4.75 7.062-1.125 2.708-1.687 5.604-1.687 8.688s.562 5.979 1.687 8.687c1.167 2.708 2.75 5.083 4.75 7.125 2 2 4.333 3.604 7 4.813 2.708 1.166 5.604 1.75 8.687 1.75h41.876zM531.938 96h-12.813V38.375h-19.187v-12.75h19.187V0h12.813v25.625h44.812v12.75h-44.812zM660.312 73.625c0 3.083-.583 6-1.75 8.75a22.625 22.625 0 0 1-4.812 7.125c-2 2-4.375 3.583-7.125 4.75-2.708 1.167-5.604 1.75-8.687 1.75H583.5V83.187h54.438c1.291 0 2.52-.25 3.687-.75s2.187-1.187 3.063-2.062a9.904 9.904 0 0 0 2.062-3c.5-1.167.75-2.417.75-3.75 0-1.292-.25-2.52-.75-3.688s-1.188-2.187-2.062-3.062a9.686 9.686 0 0 0-3.063-2.063 8.655 8.655 0 0 0-3.687-.812h-35.25c-2.667 0-5.167-.5-7.5-1.5-2.334-1-4.376-2.354-6.126-4.063-1.708-1.75-3.062-3.791-4.062-6.124s-1.5-4.834-1.5-7.5.5-5.167 1.5-7.5 2.354-4.355 4.062-6.063a19.35 19.35 0 0 1 6.126-4.125c2.333-1 4.833-1.5 7.5-1.5h51.25v12.75h-51.25c-1.792 0-3.313.625-4.563 1.875-1.208 1.208-1.813 2.73-1.813 4.563 0 1.791.605 3.312 1.813 4.562 1.25 1.208 2.771 1.813 4.563 1.813h35.25c3.083 0 5.979.583 8.687 1.75 2.75 1.166 5.125 2.77 7.125 4.812a22.625 22.625 0 0 1 4.812 7.125c1.167 2.708 1.75 5.625 1.75 8.75z"
        stroke={props.color || '#ffffff'}
        fill={props.fill || 'none'}
      />
      <path
        d="M246.125 96h-19.687c10.895 10.684 10.608 16.277 0 25.625l19.687-8.95z"
        stroke={props.color || '#ffffff'}
        fill={props.fill || 'none'}
      />
    </g>
  </svg>
);
const Memo = memo(SvgProjects);
export default Memo;