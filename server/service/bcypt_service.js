const bcrypt = require("bcrypt");
exports.hash_string = async (str,num_slat) => {
    const str_hash = await bcrypt.hash(str,num_slat).then((str_h)=>{
         return str_h
    })
    return str_hash
}

exports.compare = async(left,right) => {
    const is_match = await bcrypt.compare(left,right).then((match) => {
        return match
    })
    return is_match
}
