import NotesPage from "../components/NotesPage/NotesPage";
import Note from "../components/Note/Note";
import PageNotFound from "../components/PageNotFound/PageNotFound"
import {BrowserRouter, Route, Switch} from "react-router-dom";

const AppRoutes = () => (
      <BrowserRouter>
          <Switch>
              <Route path="/" component={NotesPage} exact={true}/>
              <Route path={"/:id"} component={Note} exact={true}/>
              <Route component={PageNotFound} />
          </Switch>
      </BrowserRouter>
)

export default AppRoutes;
