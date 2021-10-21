import Link from 'next/link'

const NAV_ITEMS = [
  {href:"/",label:"Index"},
  {href:"/about",label:"About"},
]
export const Header = () => {
  return (
    <header>
      {NAV_ITEMS.map((items)=>{
        return (
          <Link key={items.href} href={items.href}>
            <a className="anchor">{items.label}</a>
          </Link>
        )
      })}
      <style jsx>{`

        header {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        header a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .anchor {
          color: inherit;
          text-decoration: none;
          font-size:1.4rem;
          padding: 5px 10px;
        }

        .anchor:hover,
        .anchor:focus,
        .anchor:active {
          color: #0070f3;
          border-color: #0070f3;
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
    </header>
  );
}
