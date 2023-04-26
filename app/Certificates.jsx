import { client } from "../lib/client";
import { Certifications } from "../components";

async function Certificates() {
  const certificateQuery = '*[_type == "certificates"]';
  const certificates = await client.fetch(certificateQuery, {
    cache: "force-cache",
  });

  return (
    <div>
      <Certifications certificates={certificates} />
    </div>
  );
}

export default Certificates;
