import { useState } from "react";

const useAdmin = () => {
  const [admin, useadmin] = useState(true);
  return [admin];
};

export default useAdmin;
