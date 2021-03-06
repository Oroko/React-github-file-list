import React from 'react'
import ReactDOM from 'react-dom'
import Time from './Time'
import PropTypes from 'prop-types'
import './index.css'

const FileList = ({files}) => {
  return(
    <table className="file-list">
      <tbody>
        {files.map(file => (
          <FileListItem key ={file.id} file={file}/>
        ))}
      </tbody>
    </table>
  )
}
FileList.propTypes = {
  files:PropTypes.array
}; 
const FileListItem = ({file}) => {
  return(
    <tr className="file-list-item">
      <td className="file-icon"> <FileIcon file = {file} /> </td>
      <td className="file-name"><FileName file={file}/></td>
      <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
      <td className="age">
        <Time time ={file.updated_at} />
      </td>
      
    </tr>
  )
  
}

FileListItem.propTypes={
  file:PropTypes.object.isRequired
}

const FileName = ({file}) => {
  return(
    <>
    
      {file.name}
     
    </> 
   
  )
   
}
FileName.propTypes={
  name:PropTypes.object.isRequired
}

const FileIcon = ({file}) => {
  let icon = 'fa-file-text-o';
  if(file.type === "folder"){
    icon = 'fa-folder';
  }
  return(
   <>
      <i className={`fa ${icon}`} />
    </>
  )
}

FileIcon.propTypes ={
  file:PropTypes.object.isRequired
}

const CommitMessage = ({commit}) => {
  return(
    <>
      {commit.message}
      </>
    
  )
}
CommitMessage.propTypes={
  commit:PropTypes.object.isRequired
}




const testFiles = [
  {
  id : 1,
  name : 'src',
  type : 'folder',
  updated_at : "2016-07-11 21:24:00",
  latestCommit : {
  message : 'Initial commit'
  }
  },
  {
  id : 2,
  name : 'tests',
  type : 'folder',
  updated_at : "2016-07-11 21:24:00",
  latestCommit : {
  message : 'Initial commit'
  }
  },
  {
  id : 3,
  name : 'README',
  type : 'file',
  updated_at : "2016-07-18 21:24:00",
  latestCommit : {
  message : 'Added a readme '
  }
  },
  ];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector('#root')
)