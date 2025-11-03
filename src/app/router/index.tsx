import { createBrowserRouter } from "react-router";
import Game from "../../pages/game";

export const router = createBrowserRouter([
    {
        path: "/game", 
        element: <Game/>
    }
])