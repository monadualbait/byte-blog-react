 import quantum from "./assets/images/quantum.jpg";
import ai from "./assets/images/ai.jpg";
import internet from "./assets/images/internet.jpg";
import noah-image
import alex-image
import { createContext, useContext, useState } from "react";
const BlogsContext = createContext();
const BlogDB = [
 
  {
    id: 1,
    title: "The Rise of Artificial Intelligence",
    body: "Welcome to our tech blog, where we explore the fascinating world of artificial intelligence (AI) and its growing influence in modern technology.\n\nIn this article, we will delve into the latest advancements and applications of AI across various industries. From machine learning algorithms to neural networks and deep learning, AI is revolutionizing how we interact with technology.\n\nDiscover how AI is reshaping sectors such as healthcare, finance, manufacturing, and customer service. Explore the possibilities of AI-driven automation, predictive analytics, natural language processing, and computer vision.\n\nWe will also discuss the ethical considerations surrounding AI, including privacy concerns, algorithmic bias, and the importance of responsible AI development.\n\nStay updated with the latest news and trends in the AI field as we share insights from industry experts, research papers, and real-world use cases. Join us as we unravel the potential of AI and its transformative impact on our lives.\n\nMake sure to subscribe to our blog and follow us on social media for regular updates on the latest AI breakthroughs, emerging technologies, and the future of tech. Let's embark on this exciting journey into the world of artificial intelligence together!",
    author: "Noah",
    image: ai,
    date: "14th Dec"
  },
  {
    id: 2,
    title: "The Era of Quantum Computing",
    body: "Welcome to our blog, where we explore the fascinating world of quantum computing and the revolutionary potential it holds for solving complex problems.\n\nIn this article, we will dive into the principles of quantum mechanics and how they form the foundation for quantum computing. Discover the concept of qubits, the fundamental units of quantum information, and their remarkable ability to exist in multiple states simultaneously.\n\nExplore the various quantum computing architectures, such as superconducting circuits, trapped ions, and topological qubits. Learn about quantum gates, quantum algorithms like Shor's algorithm and Grover's algorithm, and their applications in cryptography, optimization, and simulation.\n\nWe will also discuss the challenges faced in building practical quantum computers, including decoherence, error correction, and scalability. Gain insights into the progress made by leading companies, research institutions, and the quantum computing community as they work towards achieving quantum advantage.\n\nStay informed about the latest breakthroughs, quantum computing news, and the future of this transformative technology. Join us as we unravel the mysteries of the quantum realm and witness the dawn of a new computing era.\n\nDon't forget to subscribe to our blog and follow us on social media for regular updates on quantum computing advancements and related topics. Let's embark on this quantum journey together!",
    author: "Noah",
    image: quantum,
    date: "11th Nov"
  },
  {
    id: 3,
    title: "The Future of 5G Technology",
    body: "Welcome to our blog post on the exciting topic of 5G technology and its incredible potential. In this article, we will explore the latest developments and advancements in the world of 5G, offering a glimpse into the future of connectivity.\n\nThe Future of 5G Technology blog aims to provide readers with a comprehensive understanding of the transformative power of 5G networks. From lightning-fast download speeds to enhanced reliability and lower latency, 5G is set to revolutionize the way we communicate and interact with technology.\n\nIn our blog, we will delve into a wide range of topics related to 5G technology. We'll discuss the impact of 5G on various industries, such as healthcare, manufacturing, transportation, and entertainment. Discover how 5G will enable breakthrough applications like telemedicine, smart cities, autonomous vehicles, and immersive virtual reality experiences.\n\nWe will also explore the challenges and considerations that come with the implementation of 5G networks. From infrastructure requirements and spectrum allocation to security and privacy concerns, we'll provide insights into the complexities of deploying this cutting-edge technology on a global scale.\n\nOur team of experts will share their insights, research, and predictions about the future of 5G, shedding light on emerging trends, innovative use cases, and the potential economic and societal impact of this transformative technology.\n\nWhether you're an industry professional, technology enthusiast, or simply curious about the future of connectivity, \"The Future of 5G Technology\" blog will be your go-to resource for staying informed and inspired. Join us on this exciting journey as we explore the possibilities and shape the future of 5G technology together.",
    author: "Alex",
    image: internet,
    date: "21st Sep"
  },
];
const AuthorsDB = [
    {
        id: 1,
        name: "Alex Aust",
        image: alex-image

    },
    {
        id: 2,
        name: "Noah Watson"
        image: noah-image
    }
]
const BlogData = ({ children }) => {
  const [blogs, setBlogs] = useState(BlogDB);

  return (
    <BlogsContext.Provider value={{ blogs }}>{children}</BlogsContext.Provider>
  );
};

export const useBlogsContext = () => useContext(BlogsContext);
export default BlogData;
