//our-domain.com/news

import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/important-news-page">Important news page</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
