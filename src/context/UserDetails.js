import { createContext } from "react";

// Creating the context object and passing the default values.

const UserDetails = createContext({ email: null, dp: null, location: null });

export default UserDetails;
