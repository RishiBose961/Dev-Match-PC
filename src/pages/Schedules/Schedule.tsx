import PendingRequest from "@/components/ScheduleCompo/PendingRequest";
import SessionCreated from "@/components/ScheduleCompo/SessionCreated";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  return (
    <div >
      <Tabs defaultValue="session">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="session">Session Created</TabsTrigger>
          <TabsTrigger value="pending">Pending Request</TabsTrigger>
        </TabsList>
        <TabsContent value="session">
          <SessionCreated/>
        </TabsContent>
        <TabsContent value="pending">
            <PendingRequest/>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Schedule;
