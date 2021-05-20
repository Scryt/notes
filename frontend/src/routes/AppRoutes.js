import Header from "../components/Header/Header"
import NotesPage from "../components/NotesPage/NotesPage";
import SingleNote from "../components/SingleNote/SingleNote";
import PageNotFound from "../components/PageNotFound/PageNotFound"
import {BrowserRouter, Route, Switch} from "react-router-dom";

const AppRoutes = () => (
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route path="/" component={NotesPage} exact={true}/>
              <Route path={"/:id"} component={SingleNote} exact={true}/>
              <Route component={PageNotFound} />
          </Switch>
      </BrowserRouter>
)

export default AppRoutes;
