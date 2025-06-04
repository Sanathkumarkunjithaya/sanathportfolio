import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
  }

  .project {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    color: #FFF;
    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 3.6rem;
      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      a > img {
        width: 5.0rem;
        height: auto;
      }
    }
    
    h3 {
      margin-bottom: 2rem;
      line-height: 1.4;
      overflow-wrap: break-word;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      overflow-wrap: break-word;
      word-break: break-word;
      line-height: 1.5;
      flex-grow: 1; /* Allow p to grow and push footer down */
      min-height: 80px; /* Ensure minimum space for consistency */
      a {
        color: #FFFF;
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;
        &:hover {
          color: var(--green);
        }
      }
    }

    footer {
      margin-top: auto;
      .tech-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.5rem;
        font-size: 1.4rem;
        opacity: 0.6;
        padding: 0;
        list-style: none;
        min-height: 40px; /* Reserve space for tech list */
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .project {
      padding: 1.5rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
    .project {
      padding: 1.2rem;
    }
    h2 {
      font-size: 3rem;
    }
    .project h3 {
      font-size: 1.4rem;
    }
    .project p {
      font-size: 1rem;
      min-height: 60px; /* Adjust for smaller screens */
    }
    .project .tech-list {
      font-size: 1.2rem;
      gap: 1rem;
      min-height: 35px;
    }
  }

  @media (max-width: 480px) {
    .projects {
      padding: 0.5rem;
    }
    .project {
      padding: 1rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    .project h3 {
      font-size: 1.2rem;
    }
    .project p {
      font-size: 0.9rem;
      min-height: 50px;
    }
    .project .tech-list {
      font-size: 1rem;
      gap: 0.8rem;
      min-height: 30px;
    }
    .project header a > img {
      width: 3.5rem;
    }
  }
`;