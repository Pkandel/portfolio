import express from 'express';
import userRoutes from './user.route';
import aboutRoutes from './about.route';
import educationRoutes from './education.route';
import experienceRoutes from './experience.route';
import projectRoutes from './project.route';
import skillRoutes from './skill.route';
import uploadRoutes from './upload.route';

const app = express();
const router = express.Router();

//using middleware
app.use(function (req, res, next) {
    next();
})

router.get(('/'), (req, res) => {
    return res.json( {
        success: true,
        message: "here you will quickely explore the end point",
        endPoints: [
            {
                url: "/api/users",
                message: "get all users data"
            },
            {                           
                url: "/api/users/save",
                message: "save user data"
            },
            {
                url: "/api/users/id",
                message: "get specific user on get request and delete on delete request"
            }
            
            ]
    })
});


//mount user routes at /users
 router.use('/user', userRoutes);

// mount about route
router.use('/about', aboutRoutes);

//education router
router.use('/education', educationRoutes);

// experience router
router.use('/experience', experienceRoutes);
// experience router
router.use('/experience', experienceRoutes);
// project router
router.use('/project', projectRoutes);
// skill router
router.use('/skill', skillRoutes);

// upload files to the server
router.use('/upload', uploadRoutes);
//mount auth routes at /auth


export default router;
