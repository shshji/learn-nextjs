export function Headline(props) {
  return (
    <div>
        <h1 className="title">
          Hello,{props.page} page <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/{props.page}.js</code>
        </p>
    </div>
  )
}
