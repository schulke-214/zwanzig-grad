import { Page, Subpage } from 'data/page';
import { Project } from 'data/project';


export const getPageUrl = (page: Page) => `/${page.metadata.slug}`;
export const getSubageUrl = (page: Page, subpage: Subpage) => `/${page.metadata.slug}/${subpage.metadata.slug}`;
export const getProjectUrl = (project: Project) => `/projekt/${project.slug}`;
