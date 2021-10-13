import { Headline } from "./Headline";
import { Links } from "./Links";

export function Main(props) {
	return (
		<main>
			<Headline page={props.page}>
        <code>pages/{props.page}.js</code>
      </Headline>
			<Links />
		</main>
	);
}
