import { initPlasmicLoader } from "@plasmicapp/loader-react";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "oGQcGtbFzYohLFbpGrRxL3",  // ID of a project you are using
      token: "PTjImg1wkeLx4mGLGUD9WLw2KImaumOYG9r5R1Da5BlLEAyWfBqQf7Zfw2h1QHVQQyG5DewbGB7J9c9tZQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})