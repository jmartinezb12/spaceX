export const getCapsuleQuery = (id) => {
    if (id) {
      return {
        query: {
          _id: id,
        },
        options: {
          populate: [
            {
              path: 'launches',
            },
          ],
        },
      };
    } else {
      return {
        query: {},
        options: {
          populate: [
            {
              path: 'launches',
            },
          ],
        },
      };
    }
  };
  