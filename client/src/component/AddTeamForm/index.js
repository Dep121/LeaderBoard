import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { createTeam } from '../../services/API';

const AddTeamForm = ({ }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      console.log(data);
      const response = await createTeam(data);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  }

  return (
    <>
      <form className="entry-form" onSubmit={handleSubmit(onSubmit)} >
        {error ? <h3 className="error">{error}</h3> : null}
        <label htmlFor="team_name" >Team Name</label>
        <input name="team_name" ref={register} required />
        <button disabled={loading} > {loading ? 'Loading...' : 'Create Team'} </button>
      </form>
    </>
  )
}

export default AddTeamForm;