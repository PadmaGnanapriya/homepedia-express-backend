import messageRoute from "./MessageRoute";
import userReviewRoutes from "./UserReviewRoute";
import serviceSupplierRoute from "./ServiceSupplierRoute";
import serviceCategoryRoute from "./ServiceCategoryRoute";
import paymentRoutes from "./PaymentRoute";
import planRoute from "./PlanRoute";
import faqRoutes from "./FaqRoute";
import {Router} from "express";
import adminRoutes from "./AdminRoutes";;

const router = Router();

router.use('/messages', messageRoute);
router.use('/user-reviews', userReviewRoutes);
router.use('/service-suppliers', serviceSupplierRoute);
router.use('/service-categories', serviceCategoryRoute);
router.use('/payments', paymentRoutes);
router.use('/plans', planRoute);
router.use('/faqs', faqRoutes);
router.use('/admins', adminRoutes);
router.get('/test', (req, res) => {
  res.send('Homepedia backend is running');
});

export default router;
