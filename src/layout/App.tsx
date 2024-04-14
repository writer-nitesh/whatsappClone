import { Routes, Route } from "react-router-dom";
// import { Authntication, } from "../components";
import { AppProvider } from "./provider";
import Updates from "../routes/updates";
import Chat from "../routes/chat";
// import Middlewear from "./middleware";
import AddContacts from "../components/addContacts";
import Main from "../routes/main";
import Home from "../routes/home";
import Community from "../routes/community";
import Call from "../routes/call";
import Message from "../routes/message";
import NewContacts from "../routes/contacts";


export default function App() {
  return (
    <AppProvider>
      {/* <Middlewear> */}
      <Routes>
        {/* Root Route */}
        <Route path="" element={<Home />}>
          <Route path="/" element={<Main />}>
            <Route index element={<Chat />} />
            <Route path="updates" element={<Updates />} />
            <Route path="communities" element={<Community />} />
            <Route path="calls" element={<Call />} />
          </Route>
          <Route path="add_contact" element={<AddContacts />} />
          <Route path="new_contact" element={<NewContacts />} />
          <Route path="user/:id" element={<Message />} />
        </Route>
      </Routes>
        {/* 
          <Routes>
            <Route path="/auth" element={<Authntication />} />
          </Routes> */}
      {/* </Middlewear> */}
    </AppProvider >
  );
}