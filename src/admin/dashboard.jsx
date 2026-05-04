import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <Link to="/admin/add" className="bg-amber-500 ...">
      Add New Bean
    </Link>
  );
}
