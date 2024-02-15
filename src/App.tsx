import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { ProjectView } from "./pages/ProjectView/ProjectView";

function App(): JSX.Element {
  // const { apiClient, getProject } = useProjectContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      // errorElement: <RootError />,
      // loader: () => {
      //   return defer({ projects: apiClient.getProjects() });
      // }
    },
    {
      path: "canvas",
      element: <ProjectView />,
    },
    // {
    //   path: "projects",
    //   element: <Projects />,
    //   loader: () => {
    //     return defer({ projects: apiClient.getProjects() });
    //   },
    //   children: [
    //     {
    //       path: ":id",
    //       element: <ProjectLoader />,
    //       loader: async (args: LoaderFunctionArgs) => {
    //         const id = args.params.id;
    //         if (!id)
    //           throw Error("project id is not present in path parameters");
    //         return defer({ project: apiClient.getProject(Number(id)) });
    //       },
    //       children: [
    //         {
    //           path: "labels",
    //           element: <Labels />,
    //           loader: (args: LoaderFunctionArgs) => {
    //             const id = Number(args.params.id);
    //             if (!id)
    //               return Error("project id is not present in path params");
    //             return defer({ labels: apiClient.getLabels(Number(id)) });
    //           },
    //         },
    //         {
    //           path: "ticket/:ticketId",
    //           element: <TicketLoader />,
    //           loader: async (args: LoaderFunctionArgs) => {
    //             const ticketId = Number(args.params.ticketId);
    //             if (!ticketId) throw Error("ticketId is not present in params");
    //             const response = Promise.all([
    //               apiClient.getTicket(ticketId).then((res) => res),
    //               apiClient.getUsers().then((res) => res),
    //               apiClient.getLabels(getProject()).then((res) => res),
    //             ]);
    //             const [ticket, assignedUsers, labels] = await response;
    //             return defer({ ticket, assignedUsers, labels });
    //           },
    //         },
    //         {
    //           path: "retros",
    //           element: <RetrosLoader />,
    //           loader: async (args: LoaderFunctionArgs) => {
    //             return defer({ retros: apiClient.getRetros(getProject()) });
    //           },
    //         },
    //         {
    //           path: "retros/:retroId",
    //           element: <RetroLoader />,
    //           loader: async (args: LoaderFunctionArgs) => {
    //             const retroId = Number(args.params.retroId);
    //             if (!retroId) throw Error("retroId is not present in params");
    //             return defer({
    //               retro: apiClient.getRetro(retroId),
    //               notes: apiClient.getNotes(retroId),
    //               topics: apiClient.getTopics(retroId),
    //             });
    //           },
    //           children: [
    //             {
    //               path: "topics/:topicId",
    //               element: <TopicLoader />,
    //               loader: async (args: LoaderFunctionArgs) => {
    //                 if (!args.params.topicId)
    //                   throw Error("topicId is not present in params");
    //                 return defer({
    //                   topic: apiClient.getTopic(Number(args.params.topicId)),
    //                 });
    //               },
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]);
  return (
    <Box height="100vh" width="100vw" overflow="hidden">
      <Provider store={store}>
        {/* <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={3000}
        hideProgressBar
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
        <RouterProvider router={router} />
      </Provider>
    </Box>
  );
}

export default App;
