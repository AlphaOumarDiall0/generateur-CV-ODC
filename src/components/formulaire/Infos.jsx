
function Infos() {
    return <>

        <div className = "cv-form-row-title">
            <h3>about section</h3>
        </div>
        <div className="cv-form-row cv-form-row-about">
            <div className="cols-3">
                <div className="form-elem">
                    <label htmlFor="" className="form-label">First Name</label>
                    <input name="firstname" type="text" className="form-control firstname" id=""  placeholder="e.g. John" />
                    <span className="form-text"></span>
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Middle Name <span className="opt-text">(optional)</span></label>
                    <input name="middlename" type="text" className="form-control middlename" id=""  placeholder="e.g. Herbert" />
                    <span className="form-text"></span>
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Last Name</label>
                    <input name="lastname" type="text" className="form-control lastname" id=""  placeholder="e.g. Doe" />
                    <span className="form-text"></span>
                </div>
            </div>

            <div className="cols-3">
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Your Image</label>
                    <input name="image" type="file" className="form-control image" id="" accept="image/*" />
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Designation</label>
                    <input name="designation" type="text" className="form-control designation" id=""  placeholder="e.g. Sr.Accountants" />
                    <span className="form-text"></span>
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Address</label>
                    <input name="address" type="text" className="form-control address" id=""  placeholder="e.g. Lake Street-23" />
                    <span className="form-text"></span>
                </div>
            </div>

            <div className="cols-3">
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Email</label>
                    <input name="email" type="text" className="form-control email" id=""  placeholder="e.g. johndoe@gmail.com" />
                    <span className="form-text"></span>
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Phone No:</label>
                    <input name="phoneno" type="text" className="form-control phoneno" id=""  placeholder="e.g. 456-768-798, 567.654.002" />
                    <span className="form-text"></span>
                </div>
                <div className="form-elem">
                    <label htmlFor="" className="form-label">Summary</label>
                    <input name="summary" type="text" className="form-control summary" id=""  placeholder="e.g. Doe" />
                    <span className="form-text"></span>
                </div>
            </div>
        </div>
  </>
}

export default Infos