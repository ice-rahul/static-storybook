import { Avatar } from "./components/avatar";
import { Badge } from "./components/badge";

function App() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex w-full justify-center gap-2 py-2">
        <Badge variant="success">Success</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <Avatar size="small" />
        <Avatar size="normal" />
        <Avatar size="large" />
      </div>
    </div>
  );
}

export default App;
