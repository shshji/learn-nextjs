
const ITEMS =[
  { href:"https://nextjs.org/docs",
    title:"Documentation \u2192",
    description:"Find in-depth information about Next.js features and API." 
  },
  { href:"https://nextjs.org/learn",
    title:"Learn \u2192",
    description:"Learn about Next.js in an interactive course with quizzes!" 
  },
  { href:"https://github.com/vercel/next.js/tree/master/examples",
    title:"Examples \u2192",
    description:"Discover and deploy boilerplate example Next.js projects." 
  },
  { href:"https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title:"Deploy \u2192",
    description:"Instantly deploy your Next.js site to a public URL with Vercel." 
  },
  
  ]

export function Links() {
  return (
        <div className="grid">

          {ITEMS.map(item => {
            return(
              <a key={item.href} href={item.href} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            );
          })}

          <style jsx>{`

        a {
          color: inherit;
          text-decoration: none;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
  )
}
