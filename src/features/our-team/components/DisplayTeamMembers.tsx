import { fetchTeam } from "@/features/dashboard/our-team/actions/fetch-team";
import { useWindowSize } from "@/hooks/useWindowSize";
import { RenderTeamMembersWrapper } from "./RenderTeamMembersWrapper";

export const DisplayTeamMembers = async () => {
  const team = await fetchTeam();

  if (!team || !team.length) return <p>No team available</p>;

  const members = [...team, ...team];

  return (
    <div className="relative flex w-full items-center justify-center gap-4">
      <RenderTeamMembersWrapper members={members} />
    </div>
  );
};
