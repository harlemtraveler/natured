import Login from './components/auth/Login';

import {
   getQuotes,
   createQuote,
   deleteQuote,
-  updateQuote
+  updateQuote,
+  login
 } from './components/auth/Login.js';

 class Dapp extends Component {
   constructor(props) {
     super(props);
     this.state = {
-      quotes: []
+      quotes: [],
+      currentUser: null
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
     this.handleEdit = this.handleEdit.bind(this);
+    this.handleLogin = this.handleLogin.bind(this);
   }

   componentDidMount() {
     });
   }

+  handleLogin(creds) {
+    login(creds)
+      .then(user => this.setState({currentUser: user}));
+  }
+
   render() {
     return (
       <Router>
         <div className="App">
           <nav>
             <Link to='/new'>Create</Link>
+            {!!this.state.currentUser || <Login onSubmit={this.handleLogin} />}
           </nav>
           <h1>Quotes</h1>
           <Route
