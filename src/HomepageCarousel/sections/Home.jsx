import { Github, Linkedin } from "lucide-react";

const Home = () => (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold">Welcome to My Homepage</h1>
    <p className="text-base">
      I'm a Software Engineer with a passion for humane design. I love creating clean,
      efficient, and user-centric digital experiences.
    </p>
    <div className="flex justify-center gap-6">
      <a href="https://github.com/rnjesuz" target="_blank" rel="noopener noreferrer">
        <Github className="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/in/rnjesus" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href="https://medium.com/@ricardo.n.jesus" target="_blank" rel="noopener noreferrer">
        <span className="text-sm font-medium">Medium</span>
      </a>
    </div>
  </div>
);

export default Home;
