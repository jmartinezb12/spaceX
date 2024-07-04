export const getCapsuleQuery = (id) => ({
  "query": id ? { "_id": id } : {},
  "options": {
    "populate": [{ "path": 'launches' }],
  },
});
export const getlaunchesQuery = (id) => ({
  "query": { "_id": id },
 "options": { "populate": [{ "path": "launches" }] }
});
export const getRocketLaunchpadQuery = (rocketId) => ({
  query: { _id: rocketId },
  options: { populate: ["rocket", "launchpad"] }
});
export const buildPaginationOptions = (page, limit) => ({
  "options": { page, limit }
});