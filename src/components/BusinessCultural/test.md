<TextField variant="standard"
    name="outlined"
    label="Search"
    type="outlined"
    onChange={(event) => setSearch('%' + event.target.value + '%')}>
</TextField>
<SearchIcon style={{ cursor: 'pointer' }} className="mt-4" variant="standard" onClick={handleSubmit}>Submit</SearchIcon>
