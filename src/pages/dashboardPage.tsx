import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { useAuthentication } from "@/hooks/useAuthentication";

const Dashboard = ()=> {
  const { principal } = useAuthentication();

  return (
    <div>

      <Card>
        <CardTitle>Welcome to Lead Management System {principal?.name}</CardTitle>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <div>
                      
                    </div>
                </div>
            </CardContent>
        </Card>
      {/* <LeadManagementTable /> */}
    </div>
  )
}

export default Dashboard;