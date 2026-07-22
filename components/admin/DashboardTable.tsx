import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import StatsCard from "@/components/admin/StatsCard";

export default function Dashboard(){

return(

<div className="flex">

<Sidebar/>

<div className="flex-1 bg-gray-600 min-h-screen">

<Header/>

<div className="p-8">

<div className="grid grid-cols-4 gap-6">

<StatsCard
title="Total Enquiries"
value={25}
/>

<StatsCard
title="New"
value={14}
/>

<StatsCard
title="Contacted"
value={8}
/>

<StatsCard
title="Admissions"
value={3}
/>

</div>

</div>

</div>

</div>

)

}