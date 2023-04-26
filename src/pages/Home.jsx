import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Card, Descriptions } from 'antd';
import { supabase } from '../client';


const Home = () => {
  const [builds, setBuilds] = useState(null);

  useEffect(() => {
    const fetchBuilds = async () => {
      const { data, error } = await supabase
      .from("Builds")
      .select("*")
      if (error) {
        console.error(error);
      } else {
        setBuilds(data);
      }
    }
    fetchBuilds();
  }, [])

  const incLike = async (event) => {
    event.preventDefault();
    
  }
  
  return (
    <div>
      <h2>User Created Builds: </h2>
      <Row gutter={8}>
        {
        builds && 
        builds.map((build) => (
          <Col key={build.id} span={8}>
            <Card className='userBuild' title={`${build.created_by}'s Build`}>
              <p><u>Specs:</u> {`${build.cpu} + ${build.gpu}`}</p>
              <p><u>Memory:</u> {build.memory}</p>
              <p><u>Storage:</u> {build.storage}</p>
              <p>Price: <b>{build.price}</b></p>
              <p>Likes: {build.likes}</p>
              <form>
                <input type='submit' value='Like' />
              </form>
            </Card>
          </Col>
        ))
        }
      </Row>
    </div>
  )
}

export default Home