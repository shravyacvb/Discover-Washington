import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function Wiki({url}) {

    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const getContents = async () => {
      let resp;
      let contents = [];

      setLoading(true);

      try {
        resp = await fetch(url);
        const json = await resp.json();
        contents = extractAPIContents(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }

      setContents(contents);
    };
  
    useEffect(() => {
      getContents();
    }, []);
  
    const extractAPIContents = json => {
      const { pages } = json.query;
      return Object.keys(pages).map(id => pages[id].extract);
    };
  
    if (loading) return <div role="status"><Loader/></div>;

    if (error) return "An error occurred";
    
    return (
      <div>
        {contents.map(content => (
          <div key={content} dangerouslySetInnerHTML={{ __html: content }} />
        ))}
      </div>
    );
  }

  export default Wiki;