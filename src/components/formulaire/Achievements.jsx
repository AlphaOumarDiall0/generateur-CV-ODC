
function Achievements() {
  return <>
    <div className="cv-form-blk">
        <div className = "cv-form-row-title">
            <h3>achievements</h3>
        </div>

        <div className = "row-separator repeater">
            <div className = "repeater" data-repeater-list = "group-a">
                <div data-repeater-item>
                    <div className = "cv-form-row cv-form-row-achievement">
                        <div className = "cols-2">
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Title</label>
                                <input name = "achieve_title" type = "text" className = "form-control achieve_title" id = "" placeholder="e.g. johndoe@gmail.com" />
                                <span className="form-text"></span>
                            </div>
                            <div className = "form-elem">
                                <label htmlFor= "" className = "form-label">Description</label>
                                <input name = "achieve_description" type = "text" className = "form-control achieve_description" id = "" placeholder="e.g. johndoe@gmail.com" />
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

export default Achievements