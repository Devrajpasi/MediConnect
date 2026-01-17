const addDoctor = async (req, res) => {
  try {
    const {
      name, email, password, speciality,
      degree, experience, about, fees, address
    } = req.body;

    const imageFile = req.file;

    if (
      !name || !email || !password || !speciality ||
      !degree || !experience || !about ||
      !fees || !address || !imageFile
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image"
    });

    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fee: fees,
      address: JSON.parse(address),
      date: Date.now(),
      available: true,
      image: imageUpload.secure_url
    };

    await doctorModel.create(doctorData);

    return res.status(201).json({
      success: true,
      message: "Doctor added successfully"
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
