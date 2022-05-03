import { useEffect, useState } from 'react';

// Custom hook for local storage from Stack Overflow solution.
// Reference: https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  const imagesDirectory = './../assets/';

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`${imagesDirectory}${fileName}`);
        setImage(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image
  };
};

export default useImage;
