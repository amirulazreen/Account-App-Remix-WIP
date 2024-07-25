import { Link } from "@remix-run/react";
import styles from "../styles/home.css?url";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Index() {
  return (
    <>
      <main className="home-container">
        <h1>Accounting Playground</h1>
        <p>Learn account by experimenting</p>
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
