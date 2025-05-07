

const RegisterUser = (req, res) => {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    console.log(`Nome: ${nome}, Email: ${email}, Senha: ${password}`);
    
    res.json({ message: "Cadastro realizado com sucesso!" });
};

module.exports = { RegisterUser };
