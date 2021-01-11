import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { POSTS_PER_PAGE } from "../constants/app";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPaht = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPaht, "utf-8");
    const matterResult = matter(fileContents);
    const contentHtml = matterResult.content;

    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostPagination() {
  let pages = [];
  const posts = getSortedPostsData();
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  for (let i = 1; i <= numPages; i++) {
    pages.push({
      params: { page: i.toString() },
    });
  }

  return pages;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const contentHtml = matterResult.content;

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
