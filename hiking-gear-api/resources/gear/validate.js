// NAME - Validate name, max length 100.
if (!(this.name && this.name.length > 2 && this.name.length < 100)) {
    error('sender', "Gear name can only be a 100 characters");
}
