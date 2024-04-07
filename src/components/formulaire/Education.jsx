

function Education() {
  return <>
    <div className="cv-form-blk">
        <div className = "cv-form-row-title">
            <h3>education</h3>
        </div>

        <div className = "row-separator repeater">
            <div className = "repeater" data-repeater-list = "group-c">
                <div data-repeater-item>
                    <div className = "cv-form-row cv-form-row-experience">
                        <div className = "cols-3">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">School</label>
                                <input name = "edu_school" type = "text" className = "form-control edu_school" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Degree</label>
                                <input name = "edu_degree" type = "text" className = "form-control edu_degree" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">City</label>
                                <input name = "edu_city" type = "text" className = "form-control edu_city" id = "" />
                                <span className="form-text"></span>
                            </div>
                        </div>

                        <div className = "cols-3">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Start Date</label>
                                <input name = "edu_start_date" type = "date" className = "form-control edu_start_date" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">End Date</label>
                                <input name = "edu_graduation_date" type = "date" className = "form-control edu_graduation_date" id = "" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Description</label>
                                <input name = "edu_description" type = "text" className = "form-control edu_description" id = "" />
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

export default Education