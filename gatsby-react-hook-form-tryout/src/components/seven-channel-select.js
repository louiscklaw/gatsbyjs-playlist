import React from 'react'
import { useForm } from "react-hook-form";

function TestSelectList(props){
  return(
    <>
      <select {...props} ref={props.reg}>
        <option value="rthk">rthk</option>
        <option value="youtube">youtube</option>
      </select>
    </>
  )
}

function PerChannelInput(props){
  let {idx} = props
  let {reg} = props
  return(
    <>
      <td>{idx}</td>
      <td><TestSelectList name={`${idx}.channel_type`} reg={reg}/></td>
      <td><input name={`${idx}.channel_vid`} ref={reg} /></td>
      <td><input name={`${idx}.channel_title`} ref={reg} /></td>
    </>
  )
}

function SevenChannelSelect(props){
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues:{
      0:{
        channel_type:"youtube",
        channel_vid: 'vid0',
        channel_title: 'title0'
      },
      1:{
        channel_type:"youtube",

        channel_vid: 'vid1',
        channel_title: 'title1'
      },
      2:{
        channel_type:"rthk",
        channel_vid: 'vid2',
        channel_title: 'title2'
      }
    }
  });

  const onSubmit = data => console.log(data);

  return(
    <>
      <h2>seven channel select</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table>
          <tr>
            <td>#</td>
            <td>channel_type</td>
            <td>v_id</td>
            <td>v_title</td>
          </tr>
          <tr> <PerChannelInput idx="0" reg={register} /> </tr>
          <tr> <PerChannelInput idx="1" reg={register} /> </tr>
          <tr> <PerChannelInput idx="2" reg={register} /> </tr>
        </table>
        <input type="submit" />
      </form>
    </>
  )
}

export default SevenChannelSelect
