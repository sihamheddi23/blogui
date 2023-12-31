
import {useState} from 'react'

function Upload(props:any) {


    const [file, setFile] = useState(props.image);
    function handleChange(e:any) {
        props.onChange(e.target.files[0])
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  


  return (
    <div>
        <div className="sm:col-span-2">
                <label htmlFor="Image" className="block text-sm font-semibold leading-6 text-gray-900">Image</label>
                <img src={file} />
        
            
                <div className="mt-2.5">
                <input type="file" name="Image" id="Image" className="" value={file} onChange={handleChange}/>
                
                </div>
        </div>

    </div>
  )
}

export default Upload