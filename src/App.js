import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Amplify App it was modified!</h1>
        <p>We now have Auth!</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
