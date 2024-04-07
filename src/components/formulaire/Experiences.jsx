
function Experiences() {
  return <>
    <div className="cv-form-blk">
        <div className = "cv-form-row-title">
            <h3>experience</h3>
        </div>

        <div className = "row-separator repeater">
            <div className = "repeater" data-repeater-list = "group-b">
                <div data-repeater-item>
                    <div className = "cv-form-row cv-form-row-experience">
                        <div className = "cols-3">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Title</label>
                                <input name = "exp_title" type = "text" className = "form-control exp_title" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Company / Organization</label>
                                <input name = "exp_organization" type = "text" className = "form-control exp_organization" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Location</label>
                                <input name = "exp_location" type = "text" className = "form-control exp_location" id = "" />
                                <span className="form-text"></span>
                            </div>
                        </div>

                        <div className = "cols-3">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Start Date</label>
                                <input name = "exp_start_date" type = "date" className = "form-control exp_start_date" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">End Date</label>
                                <input name = "exp_end_date" type = "date" className = "form-control exp_end_date" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Description</label>
                                <input name = "exp_description" type = "text" className = "form-control exp_description" id = "" />
                                <span className="form-text"></span>
                            </div>
                        </div>

                        <button data-repeater-delete type = "button" className = "repeater-remove-btn">-</button>
                    </div>
                </div>
            </div>
            <button type = "button" data-repeater-create value = "Add" className = "repeater-add-btn">+</button>
        </div>
    </div>
  </>
}

export default Experiences